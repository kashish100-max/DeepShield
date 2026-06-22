"""

import random

def detect_deepfake(filepath):
    score = round(random.uniform(0.0, 1.0), 2)

    if score > 0.75:
        return {
            "score": score,
            "label": "Likely Deepfake",
            "reasons": [
                "Facial inconsistencies detected",
                "Lighting mismatch detected"
            ]
        }

    return {
        "score": score,
        "label": "Likely Authentic",
        "reasons": [
            "No major artifacts detected"
        ]
    }

"""
from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image
import torch

model_name = "prithivMLmods/Deep-Fake-Detector-v2-Model"
processor = AutoImageProcessor.from_pretrained(model_name)
model = AutoModelForImageClassification.from_pretrained(model_name)


def detect_deepfake(filepath):
    image = Image.open(filepath).convert("RGB")
    inputs = processor(images=image, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.nn.functional.softmax(outputs.logits, dim=1).squeeze().tolist()

    labels = model.config.id2label
    result = {labels[i]: round(probs[i], 3) for i in range(len(probs))}
    return result


if __name__ == "__main__":
    result = detect_deepfake("your_image.jpg")
    print(result)  # e.g. {'Realism': 0.12, 'Deepfake': 0.88}
