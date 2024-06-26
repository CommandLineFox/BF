import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, Alert, FormControl, InputLabel, MenuItem, Select, Grid, FormControlLabel, Checkbox, Radio, FormLabel, RadioGroup } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { makeApiRequest, makeGetRequest } from '../../utils/apiRequest';
import { getMe } from '../../utils/getMe';
import { BankRoutes } from 'utils/types';
import KAlert from 'utils/alerts';
import { Context } from 'App';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 80px;
`
const FormWrapper = styled.div`
    background-color: #fafafa;
    padding: 30px;
    border-radius: 18px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const HeadingText = styled.div`
  font-size: 32px;
`

const StyledButton = styled(Button)`
  max-width: 100px ;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledTextField = styled(TextField)`
  background-color: white;
`
const StyledSelect = styled(Select)`
  background-color: white;
`
const FormSeparator = styled.div`
  display: flex;
  gap: 20px;
`
const FormSeparatorRow = styled.div`
  max-width: 200px;
`
const CheckBoxForm = styled.div`
  margin-bottom: 40px;
`
const GridContainer = styled(Grid)`
  text-align: center ;
  display: flex;
  justify-content: center;
  width: 200px;
`
const CheckboxTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`

interface createAccountData {
  jmbg: string;
  tip: string;
  vrstaRacuna: string;
  defaultCurrency: string;
  currency: string[];
}

const CreateAccountPage: React.FC = () => {
  const [formData, setFormData] = useState<createAccountData>({
    jmbg: '',
    tip: '',
    defaultCurrency: 'EUR',
    currency: [],
    vrstaRacuna: '',

  });
  const [valuteCheckbox, setValuteCheckbox] = useState([
    { naziv: 'EUR', vrednost: false },
    { naziv: 'CHF', vrednost: false },
    { naziv: 'USD', vrednost: false },
    { naziv: 'GBP', vrednost: false },
    { naziv: 'JPY', vrednost: false },
    { naziv: 'CAD', vrednost: false },
    { naziv: 'AUD', vrednost: false }
  ])
  const [idVlasnika, setIdVlasnika] = useState<string>('');

  const [fieldWarning, setFieldWarning] = useState<string>('');
  const [numbersOnlyWarning, setNumbersOnlyWarning] = useState<boolean>(false);
  const [userNotFoundWarning, setUserNotFoundWarning] = useState<boolean>(false);
  const [successPopup, setSucessPopup] = useState<boolean>(false);

  const navigate = useNavigate();
  const ctx = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        let updatedFormData: createAccountData = { ...formData };
        updatedFormData = { ...updatedFormData, tip: urlParams?.get('tip') ?? '' }
        updatedFormData = { ...updatedFormData, vrstaRacuna: urlParams?.get('vrsta') ?? '' }
        updatedFormData = { ...updatedFormData, jmbg: urlParams?.get('jmbg') ?? '' }
        setFormData(updatedFormData);

      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSumbit = async () => {
    for (const [key, value] of Object.entries(formData)) {
      if (value === '') {
        if (key !== 'vrstaRacuna') {
          console.log(value)
          setFieldWarning(key);
          return;
        }
      }
    }
    setFieldWarning('')
    const numbersOnlyRegex = /\d{13}/
    if (!(numbersOnlyRegex.test(formData.jmbg))) {
      setNumbersOnlyWarning(true)
    } else {
      setNumbersOnlyWarning(false)
    }
    const zaposleni = getMe()
    const zaposleniId = zaposleni?.id

    if (formData.tip === 'tekuci') {
      const data = {
        vlasnik: idVlasnika,
        zaposleni: zaposleniId,
        vrstaRacuna: formData.vrstaRacuna
      }
      const res = await makeApiRequest(BankRoutes.account_add_tekuci, 'POST', data, false, false, ctx);
      if (res) {
        setSucessPopup(true)
      }
    }
    // else if (formData.tip === 'pravni') {
    //   const res = await makeApiRequest(`/racuni/dodajPravni`, 'POST', data);
    //   // console.log(res)
    // }
    else if (formData.tip === 'devizni') {
      const jezici: string[] = []
      valuteCheckbox.forEach((checkbox) => {
        if (checkbox.vrednost) {
          jezici.push(checkbox.naziv)
        }
      })
      const data = {
        vlasnik: idVlasnika,
        zaposleni: zaposleniId,
        currency: jezici,
        defaultCurrency: formData.defaultCurrency,
        brojDozvoljenihValuta: 7
      }
      const res = await makeApiRequest(BankRoutes.account_add_devizni, 'POST', data, false, false, ctx);
      if (res) {
        setSucessPopup(true)
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: value as string });
  };

  const handleTipChange = (event: any) => {
    setFormData({ ...formData, tip: event.target.value as string });
  };

  const handleVrstaChange = (event: any) => {
    setFormData({ ...formData, vrstaRacuna: event.target.value as string });
  };

  const handleRadioChange = (event: any) => {
    setFormData({ ...formData, defaultCurrency: event.target.value as string });
  };


  const handleKreiranjeKorisnika = () => {
    if (formData.tip && formData.vrstaRacuna) {
      navigate(`/kreirajKorisnika?tip=${formData.tip}&vrsta=${formData.vrstaRacuna}`);
    } else if (formData.tip) {
      navigate(`/kreirajKorisnika?tip=${formData.tip}`);
    }
  };
  const handleCheckboxChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const noveValute = [...valuteCheckbox];
    noveValute[index].vrednost = event.target.checked;
    setValuteCheckbox(noveValute);
  };

  const handlePretragaKorisnika = async () => {
    const res = await makeGetRequest(`/korisnik/jmbg/${formData.jmbg}`, ctx);
    if (res && res.id) {
      setIdVlasnika(res.id)
      setUserNotFoundWarning(false)
    }
    else {
      setUserNotFoundWarning(true)
    }
  }

  return (
    <PageWrapper>
      <HeadingText>
        Kreiranje Racuna
      </HeadingText>
      {fieldWarning !== "" && <KAlert severity="error" exit={() => setFieldWarning('')}>Popunite polje '{fieldWarning}' .</KAlert>}
      {numbersOnlyWarning && <KAlert severity="error" exit={() => setNumbersOnlyWarning(false)}>Jmbg mora sadrzati iskljucivo 13 cifara.</KAlert>}
      {successPopup && <KAlert severity="success" exit={() => setSucessPopup(false)}>Uspesno kreiran.</KAlert>}
      <FormWrapper>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="tip-label">Tip</InputLabel>
          <StyledSelect
            labelId="tip-label"
            name="Tip"
            value={formData.tip}
            onChange={handleTipChange}
            label="Tip"
          >
            <MenuItem value="tekuci">Tekuci</MenuItem>
            {/* <MenuItem value="pravni">Pravni</MenuItem> */}
            <MenuItem value="devizni">Devizni</MenuItem>
          </StyledSelect>
        </FormControl>
        {formData?.tip === 'tekuci' && <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="vrsta-label">Vrsta</InputLabel>
          <StyledSelect
            labelId="vrsta-label"
            name="Vrsta"
            value={formData.vrstaRacuna}
            onChange={handleVrstaChange}
            label="Vrsta"
          >
            <MenuItem value="Studentski">Studentski</MenuItem>
            <MenuItem value="Penzionerski">Penzionerski</MenuItem>
            {/* <MenuItem value="devizni">JOSJEDANSKI</MenuItem> */}
          </StyledSelect>
        </FormControl>}
        <StyledTextField
          error={userNotFoundWarning}
          label="JMBG"
          name='jmbg'
          variant="outlined"
          value={formData.jmbg}
          onChange={handleChange}
          fullWidth
          helperText={userNotFoundWarning && "Nije pronadjen korisnik sa unetim jmbg-om"}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handlePretragaKorisnika}>
          Pretraga Korisnika
        </Button>
        <Button color="secondary" onClick={handleKreiranjeKorisnika}>
          Kreiranje Korisnika
        </Button>
        {formData.tip === 'devizni' && <FormSeparator>
          <FormSeparatorRow>
            <CheckBoxForm>
              <CheckboxTitle>Valute racuna</CheckboxTitle>
              <GridContainer container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {valuteCheckbox?.map((permisija, index) => (
                  <Grid item xs={12} md={12} lg={12} key={index}>
                    <FormControlLabel
                      control={<Checkbox checked={permisija.vrednost} onChange={handleCheckboxChange(index)} />}
                      label={`${valuteCheckbox[index].naziv.replaceAll("_", " ")}`}
                    />
                  </Grid>
                ))}
              </GridContainer>
            </CheckBoxForm>
          </FormSeparatorRow>
          <FormSeparatorRow>
            <GridContainer>
              <div>
                <CheckboxTitle>Osnovna valuta</CheckboxTitle>
                <RadioGroup
                  defaultValue="EUR"
                  onChange={handleRadioChange}
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
                  <FormControlLabel value="CHF" control={<Radio />} label="CHF" />
                  <FormControlLabel value="USD" control={<Radio />} label="USD" />
                  <FormControlLabel value="GBP" control={<Radio />} label="GBP" />
                  <FormControlLabel value="JPY" control={<Radio />} label="JPY" />
                  <FormControlLabel value="CAD" control={<Radio />} label="CAD" />
                  <FormControlLabel value="AUD" control={<Radio />} label="AUD" />
                </RadioGroup>
              </div>
            </GridContainer>
          </FormSeparatorRow>
        </FormSeparator>}
        <ButtonContainer>
          <StyledButton disabled={!idVlasnika} variant="contained" color="primary" onClick={handleSumbit}>
            Kreiraj
          </StyledButton>
        </ButtonContainer>
      </FormWrapper>
    </PageWrapper>
  );
};

export default CreateAccountPage;
