$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class ImageProcessor {
    public static void RemoveBlack(string input, string output) {
        Bitmap bmp = new Bitmap(input);
        for(int x = 0; x < bmp.Width; x++) {
            for(int y = 0; y < bmp.Height; y++) {
                Color c = bmp.GetPixel(x, y);
                if(c.R < 40 && c.G < 40 && c.B < 40) {
                    bmp.SetPixel(x, y, Color.Transparent);
                }
            }
        }
        bmp.Save(output, ImageFormat.Png);
        bmp.Dispose();
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ImageProcessor]::RemoveBlack("C:\Users\AZLAN\Desktop\PROJECTS\WEBSITES\iam\public\3d_heart_v2.png", "C:\Users\AZLAN\Desktop\PROJECTS\WEBSITES\iam\public\3d_heart_alpha.png")
[ImageProcessor]::RemoveBlack("C:\Users\AZLAN\Desktop\PROJECTS\WEBSITES\iam\public\3d_star_v2.png", "C:\Users\AZLAN\Desktop\PROJECTS\WEBSITES\iam\public\3d_star_alpha.png")
Write-Output "Backgrounds successfully removed!"
