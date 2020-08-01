const Algorithmia = require('algorithmia')
const api = require('./api')
const extractFrames = require('ffmpeg-extract-frames')
const validate = {}
validate.img = 'https://www.elaidata.com/assets/img/toyota_corolla.jpg'
getImgInfo()

// validate.video = 'use socket.io to receive the video in real time'
validate.video = './node_modules/GH010414.MP4'
const eventListen = "use socket.io to indentify when the car take the ticket/'semParar'"


if(eventListen === 'have a car'){
  const time = 'Tempo atual'
  getImage(time)
}


async function getImage(moment){
  await extractFrames({
    input: validate.video,
    output: './screenshot.jpg',
    offsets: [
      moment
    ],
    ffmpegPath: 'screnshots'
  })
  // validate.img = './screenshot-%i.jpg'
  validate.img = 'http://localhost:3001/files/screenshot.jpg'
  getImgInfo()
}
async function getImgInfo(){
  await Algorithmia("simNlkTxJYHeQKzDiRvn5fS+PNC1")
    .algo("LgoBE/CarMakeandModelDetection/1.1.0")
    .pipe(validate.img)
    .then(function(output) { 
      validate.make = output.result[0][0].make
      validate.model = output.result[0][0].model
      console.log(validate.make, validate.model)
    })
    validateType()
  }
function validateType(){
  //verificar se o carro atende a demanda ou não
  validate.validate = 'true or false'
  submitInfos()
}
function submitInfos(){
  api.post('Car', {
    make: validate.make,
    model: validate.model,
    validate: validate.validate
  })
}


//Run server
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan("dev"))
app.use('/files', 
express.static(path.resolve(__dirname, "screenshots")))
app.use(routes)
app.listen(3001)