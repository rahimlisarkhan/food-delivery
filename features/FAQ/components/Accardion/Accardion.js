import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummaryStyled } from "./Accardion.styled"
import TextTypograph from "../../../../components/Typograph"
import { useTranslation } from 'next-i18next';

export const ControlledAccordions = () => {
    const [expanded, setExpanded] = React.useState(false);
    const { t } = useTranslation();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummaryStyled
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <TextTypograph font="22" bold="true">
                        {t("faq1")}
                    </TextTypograph>
                </AccordionSummaryStyled>
                <AccordionDetails>
                    <TextTypograph font="18" color="gray">
                        {t("faqDesc1")}
                    </TextTypograph>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummaryStyled
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <TextTypograph font="22" bold="true">
                        {t("faq2")}
                    </TextTypograph>
                </AccordionSummaryStyled>
                <AccordionDetails>
                    <TextTypograph font="18" color="gray">
                      {t("faqDesc1")}
                    </TextTypograph>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummaryStyled
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <TextTypograph font="22" bold="true">
                       {t("faq3")}
                    </TextTypograph>
                </AccordionSummaryStyled>
                <AccordionDetails>
                    <TextTypograph font="18" color="gray">
                      {t("faqDesc1")}
                    </TextTypograph>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummaryStyled
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <TextTypograph font="22" bold="true">
                        {t("faq4")}
                    </TextTypograph>
                </AccordionSummaryStyled>
                <AccordionDetails>
                    <TextTypograph font="18" color="gray">
                         {t("faqDesc1")}
                    </TextTypograph>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
