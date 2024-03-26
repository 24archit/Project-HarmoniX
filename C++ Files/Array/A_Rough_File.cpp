/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
#include<iostream>
#include<vector>
class Solution {
public:
    bool search(vector<int>&nums, int target){
        int n = nums.size();
        for(int i=0; i<n ; i++){
            if(nums[i]==target){
                return 1;
            }
        }
        return 0;
    }
    int numComponents(ListNode* head, vector<int>& nums) {
        ListNode* temp = head;
        vector<int>nums1;
        while(temp != NULL){
            nums1.push_back(temp->val);
            temp = temp ->next;
        }
        int ans=0;
        int n = nums1.size(); // Bigger set
        for(int i=0; i<n; i++){
            if(search(nums, nums1[i])){
                if(i < n-1){
                    if(search(nums, nums1[i+1])){
                        ans++;
                        i=i+2;
                    }
                    else{
                        ans++;
                        i++;
                    }
                }
                else{
                    ans++;
                }
            }
            else{
                i++;
            }
        }
        return ans;
    }      
};