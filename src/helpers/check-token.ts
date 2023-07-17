import jwt from "jsonwebtoken";

export const CheckToken = (token: string | null): boolean => {
  if(!token){
    return false;
  }
  const { exp, id } = jwt.decode(token) as {
    exp: number;
    id: string
  };
  if(!exp || !id){
    return false
  }
  if(Date.now() >= exp*1000){
    return false;
  }
  return true;
}