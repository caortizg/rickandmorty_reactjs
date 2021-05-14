function highlight(text, search ){
    const re = new RegExp(search,'ig');
    return text.replace(re,'<span style="background-color: #ffff00;color: black;"><b>$&</b></span>');
}
function highlightCompoenet(text, search ){
    return <div dangerouslySetInnerHTML={{__html: highlight(text,search)}}></div>;
}


export default {
    highlight,
    highlightCompoenet
};