#include <stdio.h>
#include <stdlib.h>

int index = -1;
char gdata;

struct stack
{
    char data;
    struct stack *next;
};

struct stack *push(struct stack *head, char n)
{
    if (index == -1)
    {
        head->data = n;
        head->next = NULL;
        index++;
    }
    else
    {
        struct stack *temp = head;
        struct stack *newNode = (struct stack *)malloc(sizeof(struct stack));
        newNode->data = n;

        while (temp->next!= NULL)
        {
            temp = temp->next;
        }

        temp->next = newNode;
        newNode->next = NULL;
        index++;
    }
    return head;
}

struct stack *pop(struct stack *head)
{
    if (index == -1)
    {
        // printf("\nStack Is UnderFlow!!!\n");
    }
    else
    {
        struct stack *temp = head;
        int i = 0;
        while (i < index)
        {
            // printf("{%c%d}",temp->data,index);
            temp = temp->next;
            i++;
        }
        gdata = temp->data;
        temp->next = NULL;
        index--;
    }
    return head;
}

struct stack *peek(struct stack *head)
{
    struct stack *temp = head;
    int i = 0;
    while (temp!=NULL)
    {
        temp = temp->next;
        printf("{%c,%d}",temp->data,i);
        i++;
    }
}

void main()
{
    struct stack *head = (struct stack *)malloc(sizeof(struct stack));
    char str[20];
    char c = 'y';
    int i=0;
    printf("Enter the expersion :: ");
    fgets(str, 20, stdin);

    while (c != NULL)
    { 
        c = str[i];
        i++;
        // printf("{%d}",index);
        if (index == -1 && (c == '*' || c == '%' || c == '/' || c == '+' || c == '-'))
        {
            head = push(head,c);
            // peek(head);
        }

        else if (c == '*' || c == '%' || c == '/')
        {
            head = pop(head);
            if (gdata == '*' || gdata == '%' || gdata == '/')
            {
                printf("%c",gdata);
                head = push(head, c);
            }
            else
            {
                head = push(head,gdata);
                head = push(head, c);
            }
        }

        else if (c == '+' || c == '-')
        {
            while (index != -1)
            {
                // peek(head);
                head = pop(head);
               
                if (gdata == '*' || gdata == '%' || gdata == '/'|| gdata == '-'|| gdata == '+')
                {
                    printf("%c", gdata);
                }
            }
            head = push(head, c);
        }

        else
        {
            printf("%c",c);
        }
    }
    if(index != -1)
    {
        while(index>-1)
        {
        head = pop(head);
        printf("%c",gdata);
        }
    }
}