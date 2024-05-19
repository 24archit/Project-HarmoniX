#include<iostream>
#include<string>
#include<vector>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<string>arr(n);
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    int ans=0;
    for(int i=0; i<n; i++){
        if(arr[i]=="++X" || arr[i]=="X++"){
            ans++;
        }
        else{
            ans--;
        }
    }
    cout<<ans;
    return 0;
}