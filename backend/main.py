from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import shutil
import uuid
import os

import os

os.makedirs("uploads", exist_ok=True)

from detector import detect_deepfake

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "DeepShield API Running"
    }



@app.post("/detect")
async def detect(file: UploadFile = File(...)):

    
    file_id = str(uuid.uuid4())

    filepath = f"uploads/{file_id}_{file.filename}"

    
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        
        result = detect_deepfake(filepath)

        return result

    finally:
        
        if os.path.exists(filepath):
            os.remove(filepath)