#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
struct linear{
    ll a,b;
    double x=0;
    linear(ll a=1,ll b=0):a(a),b(b){}
};

double cross(linear& a,linear& b){
    return (double)(b.b-a.b)/(double)(a.a-b.a);
}

ll a[100010];
ll b[100010];
linear l[100010];
ll dp[100010];
ll n;

ll bs(int left,int right,ll nx){
    if(left>=right){
        return left;
    }
    int mid=left+right>>1;
    if(l[mid+1].x>=nx)return bs(left,mid,nx);
    return bs(mid+1,right,nx);
}

int main(){
    ios::sync_with_stdio(0),cin.tie(0);
    cin>>n;
    for(ll i=1; i<=n; ++i)cin>>a[i];
    for(ll i=1; i<=n; ++i)cin>>b[i];
    ll top=0;
    for(ll i=2; i<=n; ++i){
        linear cur(b[i-1],dp[i-1]);
        while(top){
            cur.x=cross(cur,l[top-1]);
            if(cur.x>l[top-1].x)break;
            top--;
        }
        l[top++]=cur;

        ll nx=a[i];
        int idx=bs(0,top-1,nx);
        dp[i]=l[idx].a*nx+l[idx].b;
    }
    cout<<dp[n];
}