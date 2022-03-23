import React from "react";

export const Css = () => {
    return (
        <>
            <p>
                CSS stands for Cascading Style Sheet. CSS is used for applying styles and make them as
                responsive. CSS has many properties includes display, color and background, position, padding,
                margin, width, border, box-sizing, etc. CSS have priority for elements,
                classes, id, *(universal selector) and inline styles. <pre>* ={">"} tag ={">"} classes ={">"} id
                    ={">"} inline styles. *</pre> is least priority and inline styles has higher priority.
                Responsive design given by flex, bootstrap and media queries.
            </p>
            <ul>
                <li>Content - The content of the box, where text and images appear</li>
                <li>Padding - Clears an area around the content. The padding is transparent</li>
                <li>Border - A border that goes around the padding and content</li>
                <li>Margin - Clears an area outside the border. The margin is transparent</li>
            </ul>
            <b>Box sizing border box</b>
            <p>
                CSS border-box is the most popular choice for setting box-sizing . It guarantees that the
                content box shrinks to make space for the padding and borders. Therefore, if you set your
                element width to 200 pixels, border-box makes sure that the content, padding, and borders fit in
                this number.
            </p>
            <b>Pseudo classes in CSS</b>
            <ul>
                CSS Selectors
                Dynamic pseudo-classes
                <li>:link</li>
                <li>:visited</li>
                <li>:hover</li>
                <li>:active</li>
                <li>:focus</li>
                The target pseudo-classes
                <li>:target</li>
                The language pseudo-classes
                <li>:lang</li>
                The UI element states pseudo-classes
                <li>:enabled</li>
                <li>:disabled</li>
                <li>:checked</li>
                Structural pseudo-classes
                <li>:root</li>
                <li>:nth-child</li>
                <li>:nth-last-child</li>
                <li>:nth-of-type</li>
                <li>:nth-last-of-type</li>
                <li>:first-child</li>
                <li>:last-child</li>
                <li>:first-of-type</li>
                <li>:last-of-type</li>
                <li>:only-child</li>
                <li>:only-of-type</li>
                <li>:empty</li>
                The negation pseudo-classes
                <li>:not</li>
            </ul>
            <table
                class="table table-hover table-striped table-bordered w-auto table-responsive{-sm|-md|-lg|-xl}"
                id="gpa">
                <thead>
                    <tr>
                        <th scope="col">Selector</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>:active</code></td>
                        <td>Matches when the user activates (for example clicks on) an element.</td>
                    </tr>
                    <tr>
                        <td><code>:any-link</code></td>
                        <td>
                            Matches both the <code>:link</code> and <code>:visited</code> states of
                            a link.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:blank</code></td>
                        <td>
                            Matches an
                            <code>&lt;input&gt;</code> element
                            whose input value is empty.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:checked</code></td>
                        <td>Matches a radio button or checkbox in the selected state.</td>
                    </tr>
                    <tr>
                        <td><code>:current</code></td>
                        <td>
                            Matches the element, or an ancestor of the element, that is currently
                            being displayed.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:default</code></td>
                        <td>
                            Matches the one or more UI elements that are the default among a set of
                            similar elements.
                        </td>
                    </tr>

                    <tr>
                        <td><code>:dir</code></td>
                        <td>
                            Select an element based on its directionality (value of the HTML
                            <code>dir</code>
                            attribute or CSS
                            <code>direction</code>
                            property).
                        </td>
                    </tr>
                    <tr>
                        <td><code>:disabled</code>
                        </td>
                        <td>Matches user interface elements that are in an disabled state.</td>
                    </tr>
                    <tr>
                        <td><code>:empty</code></td>
                        <td>Matches an element that has no children except optionally white space.</td>
                    </tr>
                    <tr>
                        <td><code>:enabled</code></td>
                        <td>Matches user interface elements that are in an enabled state.</td>
                    </tr>
                    <tr>
                        <td><code>:first</code></td>
                        <td>
                            In edia" Paged Media, matches
                            the first page.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:first-child</code></td>
                        <td>Matches an element that is first among its siblings.</td>
                    </tr>
                    <tr>
                        <td><code>:first-of-type</code></td>
                        <td>Matches an element which is first of a certain type among its siblings.</td>
                    </tr>
                    <tr>
                        <td><code>:focus</code></td>
                        <td>Matches when an element has focus.</td>
                    </tr>
                    <tr>
                        <td><code>:focus-visible</code></td>
                        <td>
                            Matches when an element has focus and the focus should be visible to the
                            user.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:focus-within</code></td>
                        <td>
                            Matches an element with focus plus an element with a descendent that has
                            focus.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:future</code></td>
                        <td>Matches the elements after the current element.</td>
                    </tr>
                    <tr>
                        <td><code>:hover</code></td>
                        <td>Matches when the user hovers over an element.</td>
                    </tr>
                    <tr>
                        <td><code>:indeterminate</code></td>
                        <td>
                            Matches UI elements whose value is in an indeterminate state, usually
                            checkboxes.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:in-range</code></td>
                        <td>Matches an element with a range when its value is in-range.</td>
                    </tr>
                    <tr>
                        <td><code>:invalid</code></td>
                        <td>
                            Matches an element, such as an <code>&lt;input&gt;</code>, in an invalid
                            state.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:lang</code></td>
                        <td>
                            Matches an element based on language (value of the HTML
                                    _attributes/lang"{">"}lang
                            attribute).
                        </td>
                    </tr>
                    <tr>
                        <td><code>:last-child</code></td>
                        <td>Matches an element which is last among its siblings.</td>
                    </tr>
                    <tr>
                        <td><code>:last-of-type</code></td>
                        <td>Matches an element of a certain type that is last among its siblings.</td>
                    </tr>
                    <tr>
                        <td><code>:left</code></td>
                        <td>
                            Paged Media, matches
                            left-hand pages.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:link</code></td>
                        <td>Matches unvisited links.</td>
                    </tr>
                    <tr>
                        <td><code>:local-link</code></td>
                        <td>
                            Matches links pointing to pages that are in the same site as the current
                            document.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:is()</code></td>
                        <td>Matches any of the selectors in the selector list that is passed in.</td>
                    </tr>
                    <tr>
                        <td><code>:not</code></td>
                        <td>
                            Matches things not matched by selectors that are passed in as a value to
                            this selector.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:nth-child</code></td>
                        <td>
                            Matches elements from a list of siblings — the siblings are matched by a
                            formula of the form <var>an+b</var> (e.g. 2n + 1 would match elements 1,
                            3, 5, 7, etc. All the odd ones.)
                        </td>
                    </tr>
                    <tr>
                        <td><code>:nth-of-type</code></td>
                        <td>
                            Matches elements from a list of siblings that are of a certain type
                            (e.g. <code>&lt;p&gt;</code> elements) — the siblings are matched by a
                            formula of the form <var>an+b</var> (e.g. 2n + 1 would match that type
                            of element, numbers 1, 3, 5, 7, etc. All the odd ones.)
                        </td>
                    </tr>
                    <tr>
                        <td><code>:nth-last-child</code></td>
                        <td>
                            Matches elements from a list of siblings, counting backwards from the
                            end. The siblings are matched by a formula of the form
                            <var>an+b</var> (e.g. 2n + 1 would match the last element in the
                            sequence, then two elements before that, then two elements before that,
                            etc. All the odd ones, counting from the end.)
                        </td>
                    </tr>
                    <tr>
                        <td><code>:nth-last-of-type</code>
                        </td>
                        <td>
                            Matches elements from a list of siblings that are of a certain type
                            (e.g. <code>&lt;p&gt;</code> elements), counting backwards from the end.
                            The siblings are matched by a formula of the form <var>an+b</var> (e.g.
                            2n + 1 would match the last element of that type in the sequence, then
                            two elements before that, then two elements before that, etc. All the
                            odd ones, counting from the end.)
                        </td>
                    </tr>
                    <tr>
                        <td><code>:only-child</code></td>
                        <td>Matches an element that has no siblings.</td>
                    </tr>
                    <tr>
                        <td><code>:only-of-type</code></td>
                        <td>Matches an element that is the only one of its type among its siblings.</td>
                    </tr>
                    <tr>
                        <td><code>:optional</code></td>
                        <td>Matches form elements that are not required.</td>
                    </tr>
                    <tr>
                        <td><code>:out-of-range</code></td>
                        <td>Matches an element with a range when its value is out of range.</td>
                    </tr>
                    <tr>
                        <td><code>:past</code></td>
                        <td>Matches the elements before the current element.</td>
                    </tr>
                    <tr>
                        <td><code>:placeholder-shown</code>
                        </td>
                        <td>Matches an input element that is showing placeholder text.</td>
                    </tr>
                    <tr>
                        <td><code>:playing</code></td>
                        <td>
                            Matches an element representing an audio, video, or similar resource
                            that is capable of being "played" or "paused", when that element is
                            "playing".
                        </td>
                    </tr>
                    <tr>
                        <td><code>:paused</code></td>
                        <td>
                            Matches an element representing an audio, video, or similar resource
                            that is capable of being "played" or "paused", when that element is
                            "paused".
                        </td>
                    </tr>
                    <tr>
                        <td><code>:read-only</code></td>
                        <td>Matches an element if it is not user-alterable.</td>
                    </tr>
                    <tr>
                        <td><code>:read-write</code></td>
                        <td>Matches an element if it is user-alterable.</td>
                    </tr>
                    <tr>
                        <td><code>:required</code></td>
                        <td>Matches form elements that are required.</td>
                    </tr>
                    <tr>
                        <td><code>:right</code></td>
                        <td>
                                    In es"{">"}Paged Media, matches
                            right-hand pages.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:root</code></td>
                        <td>Matches an element that is the root of the document.</td>
                    </tr>
                    <tr>
                        <td><code>:scope</code></td>
                        <td>Matches any element that is a scope element.</td>
                    </tr>
                    <tr>
                        <td><code>:valid</code></td>
                        <td>
                            Matches an element such as an <code>&lt;input&gt;</code> element, in a
                            valid state.
                        </td>
                    </tr>
                    <tr>
                        <td><code>:target</code></td>
                        <td>
                            Matches an element if it is the target of the current URL (i.e. if it
                            has an ID matching the current
                            <a href="https://en.wikipedia.org/wiki/Fragment_identifier" class="external"
                                rel=" noopener">URL fragment</a>).
                        </td>
                    </tr>
                    <tr>
                        <td><code>:visited</code></td>
                        <td>Matches visited links.</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <b>Pseudo Elements</b>
            <br></br>
            <table
                class="table table-hover table-striped table-bordered w-auto table-responsive{-sm|-md|-lg|-xl}"
                id="gpa">
                <thead>
                    <tr>
                        <th scope="col">Selector</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>::after</code></td>
                        <td>
                            Inserts a stylable element appearing after the originating element's
                            actual content, if used with the <code>content</code> property
                            with a value other than <code>none</code>.
                        </td>
                    </tr>
                    <tr>
                        <td><code>::before</code></td>
                        <td>
                            Inserts a stylable element appearing before the originating element's
                            actual content, if used with the <code>content</code> property
                            with a value other than <code>none</code>.
                        </td>
                    </tr>
                    <tr>
                        <td><code>::first-letter</code></td>
                        <td>Matches the first letter of the element.</td>
                    </tr>
                    <tr>
                        <td><code>::first-line</code></td>
                        <td>Matches the first line of the containing element.</td>
                    </tr>
                    <tr>
                        <td><code>::grammar-error</code></td>
                        <td>
                            Matches a portion of the document containing a grammar error as flagged
                            by the browser.
                        </td>
                    </tr>
                    <tr>
                        <td><code>::marker</code></td>
                        <td>
                            Matches the marker box of a list item, which typically contains a bullet
                            or number.
                        </td>
                    </tr>
                    <tr>
                        <td><code>::selection</code></td>
                        <td>Matches the portion of the document that has been selected.</td>
                    </tr>
                    <tr>
                        <td><code>::spelling-error</code>
                        </td>
                        <td>
                            Matches a portion of the document containing a spelling error as flagged
                            by the browser.
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}