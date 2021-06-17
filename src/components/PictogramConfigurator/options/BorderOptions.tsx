import { Box, Typography, Stack, Slider, FormLabel, Collapse } from '@material-ui/core';
import React from 'react';
import { borderColors } from '../../../data/colors';
import ColorSelection from '../ColorSelection';

type Props = {
    borderWidth: number,
    borderColor: string,
    setBorderWidth: (width: number) => void,
    setBorderColor: (color: string) => void,
}

const BorderOptions: React.FC<Props> = ({ borderWidth, borderColor, setBorderColor, setBorderWidth }) => {

    return (
        <Box>
            <Typography variant="subtitle2">Rahmen</Typography>
            <Stack spacing={2} sx={{ marginLeft: 3, marginTop: 2 }}>
                <Box>
                    <Box sx={{ paddingLeft: 3, paddingRight: 4, marginTop: 2 }}>
                        <Slider value={borderWidth} onChange={(ev, newValue) => setBorderWidth(newValue as number)} step={10} min={0} max={40} marks={[{ value: 0, label: 'keiner' }, { value: 10, label: 'dünn' }, { value: 20, label: 'schmal' }, { value: 30, label: 'breit' }, { value: 40, label: 'extra breit' }]} />
                    </Box>
                </Box>
                <Collapse in={borderWidth > 0}>
                    <Box>
                        <FormLabel>Rahmenfarbe</FormLabel>
                        <Box sx={{ maxWidth: 550, marginTop: 1 }}>
                            <ColorSelection color={borderColor} colors={borderColors} onChangeComplete={color => setBorderColor(color.hex)} />
                        </Box>
                    </Box>
                </Collapse>
            </Stack>
        </Box>
    )
}

export default BorderOptions;