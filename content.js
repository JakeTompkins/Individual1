var elements = document.getElementsByTagName('*')

Array.prototype.forEach.call(elements, element => {
    Array.prototype.forEach.call(element.childNodes, childNode => {
        if(childNode.nodeType === 3)
        {
            var text = childNode.nodeValue
            var replacedText = text.replace(/(Donald J. Trump)|(Trump)|(Donald Trump)|(Donald John Trump)|(Donald.Trump)/gi, "Individual 1")

            if(text != replacedText)
            {
                element.replaceChild(document.createTextNode(replacedText), childNode)
            }
        }

    });
});