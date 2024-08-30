import prompt from 'prompt';
import promptQRcode from '../../prompts-schema/prompt-qrcode.js';
import handle from './handle.js';
// import dotenv from 'dotenv'
// dotenv.config();


async function createQRCode(){
    prompt.get(promptQRcode, handle)
    prompt.start();
}


export default createQRCode;