#include<stdio.h>
#include<stdlib.h>

int index = -1;

struct link
{
    int data;
    struct link *next;
};

//Append ---------------------------------------

struct link * append(struct link * head){
    printf("\t\nEnter your data :: ");
    int c;
    scanf("%d",&c);
    if(index == -1)
    {
        head->data = c;
        index++;
    }
    else{
        struct link* newNode = (struct link *)malloc(sizeof(struct link));
        struct link* temp = head;
        newNode->data = c;
         while(temp->next!=NULL)
         {
             temp = temp->next;
         }
         temp->next = newNode;
         newNode = NULL;
        index ++;
    }
    return head;

}

struct link * appendAtStart(struct link *head){
    struct link* newNode = (struct link *)malloc(sizeof(struct link));
    printf("\t\nEnter your data :: ");
    int c;
    scanf("%d",&c);
    if(index == -1)
    {
        head->data = c;
        index++;
        return head;
    }
    else{
        newNode->data = c;
        newNode->next = head;
        index ++;
        return newNode;
    }

}

struct link * appendAtPos(struct link *head)
{
    
    if(index <= 2)
    {
        printf("\nU have to enter atleat 3 data to use append position!!!\n");
        head = append(head);
        return head;
    }
    else{
        struct link* newNode = (struct link *)malloc(sizeof(struct link));
        struct link *temp = head;
        struct link *jump = head;

        int c,pos,i=0;
        
        printf("\t\nEnter your data :: ");
        scanf("%d",&c);
        newNode->data = c;
        
        printf("\t\nEnter the position :: ");
        scanf("%d",&pos);
        
        while(i < pos-1)
        {
            temp = temp->next;
            i++;
        }
        printf("\ni :: %d\n",i);
        i=0;
        while(i <= pos)
        {
            jump = jump->next;
            i++;
        }
        printf("\ni :: %d\n",i);
        temp->next = newNode;
        newNode->next = jump;
        index ++;
        return head;
    }
}



//DELETE ---------------------------------------

struct link * delete(struct link * head){
    
    if(index == -1)
    {
        printf("\nlist is empty!!!\n");
    }
    else{
        struct link* temp = head;
         int i = 0 ;
         while(i < (index-1))
         {
             temp = temp->next;
             i++;
         }
         temp->next = NULL;
         index--;
    }
 
    return head;

}

//Travers ---------------------------------------
struct link * travers(struct link * head){
        struct link* temp = head;
        if(index == -1)
        {
            printf("List is empty");
        }
        else{
         while(temp!=NULL)
         {
             printf("{%d},",temp->data);
             temp = temp->next;
         }
        }
}

struct link* search(struct link *head){
    struct link * temp = head;
    int c,i=0,flag = 0;
    printf("\t\nEnter the for search :: ");
    scanf("%d",&c);

    if(index == -1)
    {
        printf("\nList is empty\n");

    }
  
    while(temp!=NULL)
    {
        if(temp->data == c)
        {
            printf("Search in completed element is at %d index.",i);
            temp = temp->next;
            i++;
            flag = 1;
            break;
        }
        else{
            temp = temp->next;
            i++;
        }
    }

    if(flag == 0)
    {
        printf("\nElement is not present in the List!!!!\n");
    }

}

struct link * menu(struct link* head)
{
    printf("\t\t\n--------Opreation--------\n");
    printf("\n1.Appen List\n2.Delete\n3.Search\n4.Travers");
    printf("\t\nEnter your choise :: ");
    int c;
    scanf("%d",&c);
    if(c == 1)
    {
        printf("\nAppend:-\n");
        head = appendAtPos(head);
        menu(head);
    }
    else if(c == 2)
    {
        printf("\nDelete:-\n");
        head = delete(head);
        menu(head);
    }
    else if (c == 3){
        printf("\nSearch:-\n");
        search(head);
        menu(head);
    }
    else if (c == 4){
        printf("\nTravers:-\n");
        travers(head);
        menu(head);
    }
    else{
        exit;
    }
}



void main(){
    printf("\t\t\n--------WelCome To Linked-List--------\n");
    struct link *head = (struct link *)malloc(sizeof(struct link));
    head->next = NULL;
    menu(head);

}