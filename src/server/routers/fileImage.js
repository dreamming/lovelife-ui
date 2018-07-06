import express from "express";
import Grid from "gridfs-stream";
import mongoose from "mongoose";
import fs from "fs";

Grid.mongo = mongoose.mongo;
const conn = mongoose.connection;
let gfs;
const router = express.Router();

conn.once("open", () => {
    gfs = Grid(conn.db);
    router.get('/img/:imgname', (req, res) => {
      const imgname = req.params.imgname;
        gfs.files.find({
            filename: imgname
        }).toArray((err, files) => {

            if (files.length === 0) {
                return res.status(404).send({
                    message: 'File not found'
                });
            }
            let data = [];
            const readstream = gfs.createReadStream({
                filename: files[0].filename
            });

            readstream.on('data', (chunk) => {
                data.push(chunk);
            });

            readstream.on('end', () => {
                data = Buffer.concat(data);
                const img = `data:image/png;base64,${Buffer(data).toString('base64')}`;
                res.end(img);
            });

            readstream.on('error', (err) => {
              // if theres an error, respond with a status of 500
              // responds should be sent, otherwise the users will be kept waiting
              // until Connection Time out
                res.status(500).send(err);
                console.log('An error occurred!', err);
            });
        });
    });
    router.post('/img', (req, res) => {
        const part = req.files.file;
        const writeStream = gfs.createWriteStream({
            filename: `img_${part.name}`,
            mode: 'w',
            content_type: part.mimetype
        });

        writeStream.on('close', (file) => {
          // checking for file
          if(!file) {
            res.status(400).send('No file received');
          }
            return res.status(200).send({
                message: 'Success',
                file: file
            });
        });
        // using callbacks is important !
        // writeStream should end the operation once all data is written to the DB 
        writeStream.write(part.data, () => {
          writeStream.end();
        });  
    });
});

// 浏览器直接显示
router.get('/image/:imagename', (req, res) => {
    const imagename = req.params.imagename;
    const url = `/Users/mac/code/dmz-app/lovelife-ui/src/assets/${imagename}`;
    fs.readFile(url,(error,file)=>{
    // 浏览器直接显示的根本
    res.writeHead(200, {'Content-Type':'image/jpeg'});     
    res.write(file);
    res.end();
})

// // 浏览器直接下载
// const content =  fs.readFileSync('/Users/mac/code/dmz-app/lovelife-ui/src/assets/Chrysanthemum_.jpg',"binary");   
// res.writeHead(200, "Ok");
// res.write(content);
// res.end();

});
module.exports = router;