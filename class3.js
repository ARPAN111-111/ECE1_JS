function calculateresult(){
    int n=document.getElementById("subjects").Value;
    let i;
    for(int i=0;i<n;i++){
        letx=prompt("enter marks of your subjects"+(i+1));
        total+=x;
        let average=total/n;
        let grade;
        if(average>90){
            console.log("<b>A+</b>")
        }
                let n=document.getElementById("result").Value;
                innerhtml="total marks"+total+"<br/>"+average+"grade"+grade;

    }
}