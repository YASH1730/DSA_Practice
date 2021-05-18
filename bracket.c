#include<stdio.h>
#include<stdlib.h>

int index = -1;

struct stack{
    char data;
    struct stack *next;
};

struct stack *push(struct stack *head, char n){
    if(index == -1)
    {
        index++;
        head->data = n;
        head->next = NULL;
    }
    else{
        struct stack *temp = head;
        struct stack *newNode = (struct stack*)malloc(sizeof(struct stack));
        newNode->data=n;

        while(temp->next!=NULL)
        {
            temp = temp->next;
        }

        temp-> next = newNode;
        newNode->next = NULL; 
        index++;
    }
    return head;
}

struct stack *pop(struct stack *head){
    index--;
    if(index == -1)
    {
        // printf("\nStack Is UnderFlow!!!\n");
    }
    else{
        struct stack *temp = head;
        int i = 0;
        while(i<index)
        {
            temp = temp->next;
            i++;
        }
        temp-> next = NULL; 
    }
    return head;
}

struct stack *peek(struct stack *head)
{
 struct stack *temp = head;
 int i = -1;
 while(i<index)
 {
     printf("{%c}",temp->data);
     temp = temp->next;
     i++;
 }
}

void main(){
    struct stack *head = (struct stack*)malloc(sizeof(struct stack));
    int i = 0,data;
    char str[20];
    char c = 'y';
    int flag = 0;
    
    printf("Enter the expersion :: ");
    fgets(str,20,stdin);

    while(c != NULL)
    {
      c = str[i];
      i++;
      if(c == '(' || c == '[' || c == '{')
      {
          head = push(head,c);
      }
      else if(c == '}' || c == ']' || c == ')'){

          if(index == -1){
              flag = 1;
          break;
          }
          else
          head = pop(head);
      }
    }

    if(index == -1 && flag == 0)
    {
        printf("\nExpression is valid\n");
    }
    else{
          printf("\nExpresion is invalid\n");
    }
    }