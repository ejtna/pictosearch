import { Typography, Box, Chip } from '@material-ui/core';
import React from 'react';
import { IPictogramResponse } from '../../hooks/network';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LinkChip: React.FC<{ label: string }> = ({ label }) => <Chip label={label} variant="outlined" style={{ marginRight: 8, marginBottom: 8 }} clickable component={RouterLink} to={`/?q=${encodeURIComponent(label)}`} />

type Props = {
    data: IPictogramResponse
}

const MetaData: React.FC<Props> = ({ data }) => {
    const { t } = useTranslation();

    if (!data) {
        return <></>;
    }

    const { categories, tags } = data;

    return (
        <>
            {categories.length > 0 && <>
                <Typography variant="subtitle2" gutterBottom={true}>{t('meta.categories')}</Typography>
                <Box mb={2}>
                    {categories.map(category => <LinkChip key={category} label={category} />)}
                </Box>
            </>}
            {tags.length > 0 && <>
                <Typography variant="subtitle2" gutterBottom={true}>{t('meta.tags')}</Typography>
                <Box mb={2}>
                    {tags.map(tag => <LinkChip key={tag} label={tag} />)}
                </Box>
            </>}
        </>
    )
}

export default MetaData;