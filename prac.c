#include<stdio.h>
#include<stdlib.h>

int index = -1;

struct node {
int data;
struct node *next;
};

struct node * insert(struct node *head){
    int val;
    printf("enter the data %d :: ",index);
    scanf("%d",&val);

    if(index == -1)
    {
        head->data = val;
        head->next = head;
        index+=1;
    }
    else{
    index+=1;
    struct node * newNode = (struct node *)malloc(sizeof(struct node));
    struct node * temp = head;
    newNode ->data = val;
    
    while(temp->next!=head)
    {
        // printf("{%d} ",temp->data);
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->next = head;
    }
    return head;

}


void travers(struct node *head){
    printf("\n\nTravers\n");
    struct node * temp = head;
    int i = index;
    while(i>=-10)
    {
        printf("\t%d",temp->data);
        temp = temp-> next;
        i--;
    }

}

void main(){
    struct node * head = (struct node *)malloc(sizeof(struct node));
    int i = 0;
    while(i<5)
    {
    head = insert(head);
    i++;
    }
    travers(head);
}