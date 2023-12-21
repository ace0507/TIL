//7. 다음 자바 코드에 알맞는 출력값을 작성하시오.

public static void main(String args[]){
  
  int i = 3; int k = 1; 
  switch(i) { 
    case 1: k += 1;
    case 2: k++;
    case 3: k = 0; 
    case 4: k += 3; 
    case 5: k -= 10; 
    default: k--; 
  }
  System.out.print(k); 
  
}
 
