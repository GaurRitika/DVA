// we will upload files and photo from here


import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // jitni photos yahan peh aayengi , unko store karne ke liye public folder he image wala usmeh jayegi
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {

      cb(null,Date.now() + '-' + path.extname(file.originalname) )
    }
  })
  
  const upload = multer({ storage: storage })

  export default upload;