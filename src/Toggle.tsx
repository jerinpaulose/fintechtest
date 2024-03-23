import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

interface ToggleProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ label, value, onChange }) => {
  const handleChange = () => {
    onChange();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={value} onChange={handleChange} />}
        label={label}
      />
    </FormGroup>
  );
};

export default Toggle;
