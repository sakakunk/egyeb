#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    ifstream x("alapatya.txt");
    ifstream y("virgindin.txt");
    ofstream z("eredm.txt");

    string dx, dy;

    x >> dx; y >> dy;
    while( !x.fail() ){
        if(y.fail() || dx<dy){
            for (int i=0; i<(int)dx.size(); ++i){
                 dx[i] = toupper(dx[i]);
            }
            z << dx << endl;
            x >> dx;
        } else if( !y.fail() && dx>dy){

            y >> dy;
        }else if ( !y.fail() && dx==dy){

            x >> dx; y >> dy;
        }
    }

    return 0;
}
