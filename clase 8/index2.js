let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads");
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.fieldname + file.originalname);
    }

});

const upload = multer({ storage });

router.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

router.post("/subir", upload.single("miArchivo"), (req, res, next) => {
    const file = req.file
    if(!file){
        const error = new Error("pleaseUploadFile");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(file);
});



app.use("/", router);