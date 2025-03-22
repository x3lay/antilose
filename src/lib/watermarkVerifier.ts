import { toast } from "sonner";


export function verifyWatermark(): boolean {
  const expectedAppName = "Antilose Software";
  const expectedWatermarkText = "Dominate with Antilose.";
  
  try {
    
    const currentAppName = document.title;
    if (currentAppName !== expectedAppName) {
      showWatermarkError("Application name has been modified");
      return false;
    }
    
    
    const watermarkElement = document.querySelector('span.absolute.left-1\\/2');
    if (!watermarkElement || !watermarkElement.textContent?.includes(expectedWatermarkText)) {
      showWatermarkError("Attribution text has been removed or modified");
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Error verifying watermark:", error);
    return false;
  }
}

/**
 * не трогай бля)
 */
function showWatermarkError(details: string): void {
  toast.error(
    "This source is free and not for sale. Unauthorized modifications detected.", 
    {
      id: "watermark-error",
      duration: 10000,
    }
  );
  console.error(`Unauthorized modification: ${details}. This source is free and not for sale.`);
} 