"use client";

import { useEffect } from "react";
import { verifyWatermark } from "@/lib/watermarkVerifier";

/**
 * компонент который проверяет водяной знак не убрали ли чо
 * клиентская часть ниче не показывает
 */
export function WatermarkValidator() {
  useEffect(() => {
    // маленькая задержка чтоб дом успел загрузиться норм
    const timeoutId = setTimeout(() => {
      verifyWatermark();
    }, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // этот компонент ничего не рендерит ваще
  return null;
} 