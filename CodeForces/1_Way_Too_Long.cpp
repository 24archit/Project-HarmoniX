// LINK : https://codeforces.com/problemset/problem/71/A
#include<iostream>
#include<vector>
#include<string>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<string> words(n);
    for(int i=0; i<n; i++){
        cin>>words[i];
    }
    vector<string> ans;
    for(int i=0; i<n; i++){
        if(words[i].length() <=10){
            ans.push_back(words[i]);
        }
        else{
            string temp;
            int num = words[i].length()-2;
            temp.push_back(words[i].at(0));
            temp.append(to_string(num));
            temp.push_back(words[i].at(num+1));
            ans.push_back(temp);
        }
    }
    for(int i=0; i<n; i++){
        cout<<ans[i]<<endl;
    }

    return 0;
}