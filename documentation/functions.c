#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define NORTH 0
#define EAST 1
#define SOUTH 2
#define WEST 3

#define ROWS 20
#define  COLUMNS 10

// vertical walls array
bool verticalWalls[ROWS][COLUMNS+1];

// horizontal walls array
bool horizontalWalls[ROWS+1][COLUMNS];

int values[ROWS][COLUMNS];

int mouseRow;
int mouseColumn;
int mouseHeading = SOUTH;

int targetRow;
int targetColumn;
int i=0,j=0;


void changeHeading(int heading)
{

        switch(heading)
        {
                case NORTH:
                        //mouseColumn -= 1;
                        mouseHeading = WEST;
                        break;
                case EAST:
                        //mouseRow -= 1;
                        mouseHeading = NORTH;
                        break;
                case SOUTH:
                        //mouseColumn += 1;
                        mouseHeading = EAST;
                        break;
                case WEST:
                        //mouseRow += 1;
                        mouseHeading = SOUTH;
                        break;
                default:
                        break;

        }

}

void addWall(int dir)
{
	switch(dir)
	{
		case NORTH:
			horizontalWalls[mouseRow][mouseColumn] = true;
			break;
		case EAST:
			verticalWalls[mouseRow][mouseColumn+1] = true;
			break;
		case SOUTH:
			horizontalWalls[mouseRow+1][mouseColumn] = true;
			break;
		case WEST:
			verticalWalls[mouseRow][mouseColumn] = true;
			break;
		default:
			break;	
	}

}


void removeWall(int dir)
{
        switch(dir)
        {
                case NORTH:
                        horizontalWalls[mouseRow][mouseColumn] = false;
                        break;
                case EAST:
                        verticalWalls[mouseRow][mouseColumn+1] = false;
                        break;
                case SOUTH:
                        horizontalWalls[mouseRow+1][mouseColumn] = false;
                        break;
                case WEST:
                        verticalWalls[mouseRow][mouseColumn] = false;
                        break;
                default:
                        break;
        }

}


void Maze()
{
	//initialize verticalWalls (add exterior walls)
	for(i = 0;i < ROWS;i++)
	{
		for(j = 0;j<COLUMNS+1;j++)
		{
			if(j==0 || j == COLUMNS)
			{
				verticalWalls[i][j] = true;
			}
		}
	}

	//initialize horizontalWalls (add exterior walls)
	for(i = 0;i < ROWS + 1;i++)
	{
		for(j=0;j<COLUMNS;j++)
		{
			if(i==0 || i==ROWS)
			{
				horizontalWalls[i][j]=true;
			}
		}
	}
}

FILE *fp;

void print()
{
	fp = fopen("Map.txt", "w+");
	for(i = 0;i < 2*ROWS+1;i++)
	{
		for(j = 0;j < 2*COLUMNS+1;j++)
		{
			//Add Horizontal Walls
			if(i%2 == 0 && j%2 == 1)
			{
				if(horizontalWalls[i/2][j/2] == true)
				{
					printf(" ---");
					fprintf(fp, "%s", " ---");//do this for all print stmt's
				}
				else
				{
					printf("    ");
					fprintf(fp, "%s","    ");
				}
			}

			//Add Vertical Walls
			if(i%2 == 1 && j%2 == 0)
			{
				if(verticalWalls[i/2][j/2] == true)
				{
					printf("|");
					fprintf(fp, "%s","|");
				}
				else
				{
					printf(" ");
					fprintf(fp, "%s"," ");
				}
			}

			//Add Flood Fill Values
			if(i%2 == 1 && j%2== 1)
			{
				if((i-1)/2 == mouseRow && (j-1)/2 == mouseColumn)
				{
					if(mouseHeading == NORTH)
					{
						printf(" ^ ");
						fprintf(fp, "%s", " ^ ");
					}
					else if(mouseHeading == EAST)
					{
						printf(" > ");
						fprintf(fp, "%s"," > ");
					}
					else if(mouseHeading == SOUTH)
					{
						printf(" v ");
						fprintf(fp, "%s"," v ");
					}
					else if(mouseHeading == WEST)
					{
						printf(" < ");
						fprintf(fp, "%s"," < ");
					}
				}
				else
				{
					int value = values[(i-1)/2][(j-1)/2];
					if(value >= 100)
					{
						printf("%d", value);
						fprintf(fp,"%d",value);
					}
					else
					{
						printf(" ");
						printf("%d", value);
						fprintf(fp,"%s"," ");
						fprintf(fp,"%d",value);
					}
					if(value < 10)
					{
						printf(" ");
						fprintf(fp,"%s"," ");
					}
				}
			}
		}
		printf("\n"); fprintf(fp, "%s","\n");
	}
	printf("\n");	fprintf(fp, "%s","\n");
	
	fclose(fp);
}
