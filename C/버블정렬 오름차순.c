//2020년 1회
#include <stdio.h>
#define SIZE 5
//include와 define은 전처기기다
//전처리기(Preprocessor)는 컴파일(코드를 기계어로 번역)의 한 과정으로 본문이 컴파일 되기 전에 실행되는 컴파일이다.
//#include 전처리기는 원하는 헤더 파일을 해당 파일에 포함(include)시킬 때 사용된다.
//#define은 상수(숫자, 기호, 문자열 등)나 심지어 함수까지 특정 문자로 치환할 수 있는 기능이다.

int main(void) {
        int arr[SIZE] = {75, 100, 95, 50, 85};
        //배열의 칸이 5개 있다. arr[0]~arr[4] 까지 각각 75, 100, 95, 50, 85를 넣어준다.
    int i, j, temp;
    // i = 0
    // j = 0
    // temp = 0
    //변수가 선언된곳에 쓰레기값을 넣어준다. (난 0으로 대체했다.)
    for(i = 1; i < SIZE; i++) {
        // i보다 5가 작을때까지 for문을 돌리며 i에 1씩 추가한다. 
            for(j=0; j < SIZE-i; j++) {
                //j가 5-1보다 작을 때 까지 돌려주며 j를 1씩 추가한다.
                if(arr[j] > arr[j+1]) {
                    //arr[j] 가 arr[j+1]보다 크면 (예를 들어 j가 1일때 현재 arr[j]는 100, arr[j+1]은 95이다. arr[j]가 더 크니 밑에것을 실행)
                    temp = arr[j];
                    //if문이 참이면 temm = 0 에 arr[j]의 값을 넣어준다.
                    //temp = 100 이 되었다.
                    arr[j] = arr[j+1];
                    //이렇게 되면 현재 [75, 95, 100, 50, 85]가 된다.
                    arr[j+1] = temp;
                    //arr[2]자리에 100이 온다?그럼 95는?
                }
            }
    }
    for(i=0; i<SIZE; i++) {
        //i=0이고 0<5 까지 for문을 돌린다.
        printf("%d", arr[i]);
        //줄바꿈 없이 %d니까 10진수로 나란히 출력한다.
    }
    
}


//50, 75, 85, 95, 100
//버블정렬은 이웃 된 항목을 비교하며 오름차순으로 정렬한다.
