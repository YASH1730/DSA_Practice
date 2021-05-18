#include<stdlib.h>
#include<stdio.h>

struct array
{
    int used_data;
    int total_data;
    int * ptr;
};

void create(struct array *a,int td)
{
    a->total_data = td;
    a->ptr = (int *) malloc(td*(sizeof(int))) ;
}

void insert(struct array *a,int i){

        int n;

        printf("\nEnter the data :: ");
        scanf("%d",&n);

        int c;
        
        printf("\ndo want to enter more data press y :: ");
        scanf("%d",&c);

        (a->ptr)[i] = n;
        a->used_data = i;

        
        if(c == 1 )
        {
            if(i != a->total_data)
            {
              insert(a,i+1);
            }
            else
            {
                printf("Sorry INDEX ECCEDED !!!");
                char e;
                scanf("%c",&e);
            }
            
        }
        
        
}
void insertPos(struct array *a,int i){

        int n;

        printf("\nEnter the data :: ");
        scanf("%d",&n);

        

        
        if(i > a->total_data)
            {
               printf("Sorry INDEX ECCEDED !!!");
                char e;
                scanf("%c",&e);
            }
            else{
                (a->ptr)[i] = n;
            }  
        
}


void show(struct array *a)
{
    for (int i = 0; i <= a->total_data; i++)
    {
        printf("\nData at %d :: %d",i,(a->ptr)[i]);
    }
}


void main(){

    struct array arr;

    printf("\t\t\t----INITIALIZE YOUR ARRAY----\n");

    printf("Enter the size of array :: ");
    int size;
    scanf("%d",&size);

    create(&arr,size);

    printf("------ INSERT ------\n\n");
    insertPos(&arr,5);

    printf("------ SHOW ------\n\n");
    show(&arr);
}
