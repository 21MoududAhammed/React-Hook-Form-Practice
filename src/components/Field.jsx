import React from "react";

export default function Field({label, children}){
    const id = getChildId(children);
    return (
        <div className="flex flex-col items-start justify-start mt-2 p-0 w-full mr-2">
            {label && <label htmlFor={id}>{label}</label>}
            {children}
        </div>
    );
}

const getChildId = (children) =>{
    const childArray = React.Children.toArray(children);
    for(const child of childArray){
        if('id' in child.props){
            return child.props.id;
        }
    }
    return null;
}

