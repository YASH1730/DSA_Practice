#include <stdio.h>
#include <stdlib.h>

struct stack
{
    char data;
    struct stack *next;
};

int index = -1;
char popdata;

struct stack *push(struct stack *top, char n)
{
    struct stack *newTop = (struct stack *)malloc(sizeof(struct stack));
    newTop->data = top->data;
    newTop->next = top->next;
    top->data = n;
    top->next = newTop;
    index++;
    return top;
}

struct stack *pop(struct stack *top)
{

    struct stack *delet = top;
    popdata = top->data;
    top = top->next;
    free(delet);
    index--;
    return top;
}

void main()
{

    struct stack *top = (struct stack *)malloc(sizeof(struct stack));
    top->data = ' ';
    top->next = NULL;
    index++;

    char str[20], c = 'y';
    int i = 0;

    printf("Enter the expersion :: ");
    fgets(str, 20, stdin);

    printf("Result :: {");

    // loop for reading the input
    while (c != NULL)
    {
        c = str[i];
        i++;

        if (index == 0 && (c == '*' || c == '%' || c == '/' || c == '+' || c == '-'))
        {
            top = push(top, c);
        }

        else if (index != 0 && (c == '*' || c == '%' || c == '/'))
        {
            top = pop(top);
            if (popdata == '*' || popdata == '%' || popdata == '/')
            {
                printf("%c", popdata);
                top = push(top, c);
            }
            else
            {
                top = push(top, popdata);
                top = push(top, c);
            }
        }

        else if (index != 0 && (c == '-' || c == '+'))
        {
            while (index != 0)
            {
                top = pop(top);
                printf("%c", popdata);
            }
            top = push(top, c);
        }
        else
        {
            printf("%c", c);
        }
    }
    //printing the rest of output
    while (index != -1)
    {
        top = pop(top);
        printf("%c", popdata);
    }
    printf("}");
}