import React from "react";

export const Html = () => {
    return (
        <>
            <p>
                HTML is used to display just a content. There are 2 types of tag elements present in HTMl.
                First one is semantic elements and second is non-semantic elements.
                Semantic elements has purpose by its names. Examples: header, article, iframe, footer, etc.
                Non-semantic elements does not have meaning about its content when used. Examples: div and span.
                HTML elements are available as nodes in Document Object Model(DOM). DOM is represented as
                Tree structures. Block elements should not be placed under <em>paragraph</em> tag.
                If block elements are placed inside paragraph, then the elements inside paragraph will become
                global and styles applied to paragraphs are not applied to block child elements.
            </p>
            <br></br>
            <p>
                To make the poem and quotes to appear as same use pre tag. For superscript and subscript, use
                sup and sub tag. Table tag is used to display content as tables, tr tag is row, th is header, td
                is for column.
                List and ordered list are used to display elements in order. Below are block and inline
                elements.
            </p>
        </>
    )
}