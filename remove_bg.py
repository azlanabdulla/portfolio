import os
from PIL import Image

def remove_black_bg(input_path, output_path, threshold=20):
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return
        
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is dark (r, g, b are all below threshold)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # Fully transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved: {output_path}")

# Process both images
remove_black_bg("public/3d_heart_v2.png", "public/3d_heart_alpha.png", threshold=30)
remove_black_bg("public/3d_star_v2.png", "public/3d_star_alpha.png", threshold=30)
