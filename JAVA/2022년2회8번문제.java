struct A{ 
  int n, 
  int g
} 
 
int main(){
  A a = new A[2] 
  for(i=0; i <2; i++) {
    a[i].n = i, 
    a[i].g=i+1  
  }
  System.out.printf(a[0].n + a[1].g);  