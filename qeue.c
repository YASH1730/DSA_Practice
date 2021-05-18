#include <stdio.h>
#include <stdlib.h>

int index = -1;

struct qeue
{
    int data;
    struct qeue *next;
};

struct qeue *push(struct qeue *top, int data)
{
    if (index == -1)
    {
        top->data = data;
        top->next = NULL;
        index++;
    }
    else
    {
        struct qeue *newNode = (struct qeue *)malloc(sizeof(struct qeue));
        newNode->data = top->data;
        newNode->next = top->next;
        top->data = data;
        top->next = newNode;
        index++;
    }
    return top;
}
struct qeue *pop(struct qeue *top)
{

    if (index == 0)
    {
        top = NULL;
        index--;
    }

    else if (index == -1)
        printf("\n\nQeue is Empty!!!");

    else
    {
        struct qeue *visit = top;
        int c = index;
        while (c != 1)
        {
            visit = visit->next;
            c--;
        }
        visit->next = NULL;
        index--;
    }
    return top;
}

void travers(struct qeue *top)
{
    struct qeue *visit = top;
    while (visit != NULL)
    {
        printf("{%d},", visit->data);
        visit = visit->next;
    }
}

void main()
{
    struct qeue *top = (struct qeue *)malloc(sizeof(struct qeue));
    int i = 0, data;
    while (i < 5)
    {
        printf("Enter the data :: ");
        scanf("%d", &data);
        top = push(top, data);
        i++;
    }
    printf("\nTRAVERS\n");
    travers(top);

    top = pop(top);
    top = pop(top);
    top = pop(top);
    top = pop(top);
    top = pop(top);

    printf("\nTRAVERS\n");
    top = pop(top);
    travers(top);
}