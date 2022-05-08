#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node * next;
};

void linkTravers(struct node * ptr)
{
     while(ptr->next != NULL)
    {
        printf("\n%d",ptr->data);
        ptr = ptr->next;
    }
    printf("%d",ptr->data);
}

struct node * InsertAtStart(struct node * ptr)
{
    struct node *newHead = (struct node *) malloc(sizeof(struct node));
    printf("Enter the data :: ");
    int n;
    scanf("%d",&n);
    newHead->data = n;
    newHead->next = ptr;
    ptr->next = NULL;
    return newHead;
}

struct node * InsertAtLast(struct node * ptr)
{
    struct node *newNODE = (struct node *) malloc(sizeof(struct node)); //ye ek new node he
    struct node *jump = ptr; // jumping porinter 
    
    printf("Enter the data :: ");
    int n;
    scanf("%d",&n);
    newNODE->data=n;

    while(jump->next != NULL)
    {
        jump = jump->next;
    }
    jump->next = newNODE;
    newNODE->next = NULL;
    return ptr;
}


struct node * InsertAtBetween(struct node * ptr)
{
    struct node *newNODE = (struct node *) malloc(sizeof(struct node)); //ye ek new node he
    struct node *jump = ptr; // jumping porinter 
    struct node *jump2 = ptr; // jumping porinter 
    

    printf("Enter the position :: ");
    int pos,i = 0;
    scanf("%d",&pos);
    
    
    printf("Enter the data :: ");
    int n;
    scanf("%d",&n);
    newNODE->data=n;

    while(i != pos-1)
    {
        jump = jump->next;
        i++;
    }
    while(i != pos)
    {
        jump2 = jump2->next;
        i++;
    }
    jump->next = newNODE;
    newNODE->next = jump2;
    return ptr;
}
struct node * DeleteAtPos(struct node * ptr)
{
    struct node *jump = ptr; // jumping porinter 
    struct node *jump2 = ptr; // jumping porinter /

    printf("Enter the position :: ");
    int pos,i = 0;
    scanf("%d",&pos);

    while(i != pos-1)
    {
        jump = jump->next;
        i++;
    }
    while(i != pos+1)
    {
        jump2 = jump2->next;
        i++;
    }
    jump->next = jump2;
    return ptr;
}

struct node * DeleteAtEnd(struct node *head) {
    struct node * jump = head;
    int i = 0,j = 0; 
    while(jump->next!=NULL)
    {
        i++;
        jump = jump->next;
    }
    //printf("%d",i);
    jump = head;
    while(j <= i-2)
    {
        jump = jump->next;
        j++;
    }
    jump->next = NULL;
 return head;

}

    


void main(){
    int i = 0;
    struct node * head = (struct node *)malloc(sizeof(struct node));
    head->next = NULL;    
    head->data = 0;
    while(i<4)
    {
    i++;
    head = InsertAtStart(head);
    }
    linkTravers(head);

}
