function bouncingBall(h,  bounce,  window) {
  if(h>0 && bounce >0 && bounce <1 && window <h){
    let n =1
    while(h>window){
      h = h*bounce;
      if(h>window){
        n=n+2
      }
    }
  return n
  }
  else{
    return -1
  }
  
}

bouncingBall(-1,0.66, 1.5)
