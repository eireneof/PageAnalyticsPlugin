import { Request, Response, NextFunction } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization?.length) {
      res.status(401).json({ error: "Access token is required" });
      return;
    }
  
    // Extrai o token diretamente
    const token = req.headers.authorization.trim();
    
  
    if (!isValidToken(token)) {
      res.status(403).json({ error: "Invalid or unauthorized token" });
      return;
    }
  
    next();
  };
  
  function isValidToken(token: string): boolean {
    console.log(token)
    const validTokens = ["yourToken1", "yourToken2"];
    return validTokens.includes(token);
  }
  