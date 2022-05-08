#include<stdio.h>
#include<stdlib.h>

int index = 0;

struct node
{
    int data;
    struct node* next;
    struct node* pre;
};

struct node *add(struct node *head){
    int n;
    printf("Enter the data :: ");
    scanf("%d",&n);

    if(index == 0)
    {
        index++;
        head->pre = NULL;
        head->data = n;
        head->next = NULL;
    }
    else{
        struct node *temp = head;
        struct node *newNode = (struct node *)malloc(sizeof(struct node));
        newNode->data = n;

        while(temp->next!=NULL)
        {
            temp = temp->next;
            // printf("{%d}",temp->data);
        }
        temp->next = newNode;
        newNode->pre = temp;
        newNode->next = NULL;
        index++;
}
return head;
}



struct node * travers(struct node * head){
    struct node * temp = head;
    int i = 0;
    while(temp->next!=NULL)
    {
        // printf("{%d}",i);
        if(i==0)
        printf("%d\t",temp->data);

        temp = temp->next;
        printf("%d\t",temp->data);
        
        i++;
    }
printf("\n\n");
    while(i>=0)
    {
        printf("%d\t",temp->data);
        temp = temp->pre;
        i--;
    }
}


void main(){
    struct node *head = (struct node*)malloc(sizeof(struct node));
    int i = 5;
    while (i>=0)
    {
        head = add(head);
        i--;
    }
    printf("\nTRAVERSE\n");
    travers(head);
    }