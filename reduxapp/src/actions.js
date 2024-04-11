export const deposit=(amount)=>{
    return {type:"deposit",payload:amount}
}

export const withdrawal=(amount)=>{
    return {type:"withdrawal",payload:amount}
}

export const Cellnumber=(Mobile)=>{
    return {type:"MobileUpdate",payload:Mobile}
}

export const Name=(Fullname)=>{
    return {type:"FullName",payload:Fullname}
}

export const resetValue=()=>{
    return  {type:"reset"} 
}