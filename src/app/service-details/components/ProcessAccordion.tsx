'use client';

import { Accordion } from "@szhsin/react-accordion";
import ProcessAccordionItem from "./ProcessAccordionItem";
import { accordionItems } from "./data/accordion";

export default function ProcessAccordion() {
    return (
        <Accordion transition>
            {
                accordionItems.map(({ header, text, isInitial }, i) => (
                    <ProcessAccordionItem
                        key={i}
                        id={i + 1}
                        isInitial={isInitial}
                        header={header}
                        text={text}
                    />
                ))
            }
        </Accordion>
    );
}