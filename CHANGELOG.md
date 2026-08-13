# KBD Command Center — Endringslogg

Versjonering følger [Semantic Versioning](https://semver.org/): MAJOR.MINOR.PATCH

---

## v1.4.2 — 13. aug 2026
### Fikset
- Reservasjon redigering lagres nå korrekt til SharePoint (spId ble overskrevet)
- Timestamp i topplinje oppdateres ved hver deploy
- Versjonsnummer lagt til i topplinje

---

## v1.4.1 — 13. aug 2026
### Nytt
- DID-felt på enheter (SharePoint-kolonne + skjema + tabell)
- Service/Rep som ny enhettype (erstatter Kasse)
- Redigeringsknapp på enheter
- Notat-kolonne i Utleieoversikt
- Returdato modal (erstatter prompt-dialog)

### Fikset
- Filterpiller (Telpo M1 / Betalingsterminaler / Service/Rep) filtrerer nå Enheter-visningen
- KPI-kort i Utleieoversikt respekterer typefilter
- Registrer retur-knapp vises også for Forfalt-status

---

## v1.4.0 — 13. aug 2026
### Nytt
- Reservasjoner-modul med full CRUD og SharePoint-integrasjon
- Gantt-kalender viser reservasjoner som gule bånd øverst
- Konvertering fra reservasjon til utleie med enhetvelger
- KPI-kort for reservasjoner (Aktive, Planlagte, Totalt antall)

---

## v1.3.2 — 13. aug 2026
### Nytt
- Aktivitetslogg i Utleieoversikt (lagres til SharePoint Logg-liste)
- Logg dekker: ny utleie, endring, retur, brukerendringer

### Fikset
- Brukertilgang-seksjon vises nå korrekt for Administrator
- renderSettings kaller renderBrukere ved navigasjon

---

## v1.3.1 — 13. aug 2026
### Nytt
- "Kan redigere"-avkrysning per bruker i Brukertilgang
- Redigeringstilgang styrer synlighet av CRUD-knapper

---

## v1.3.0 — 13. aug 2026
### Nytt
- Brukertilgang-administrasjon under Innstillinger (kun Administrator)
- Per-modul tilgangsstyring med avkrysningsbokser
- Tilganger lagres i SharePoint Brukere-liste
- Moduler skjules/vises basert på brukerens tilgang ved innlogging

---

## v1.2.3 — 12. aug 2026
### Fikset
- Utleie-data lagres og hentes fra SharePoint (Enheter + Utleie lister)
- Migrering fra localStorage til SharePoint med ID-mapping
- Dato-parsing tidssone-fix (parseLD funksjon)

---

## v1.2.2 — 12. aug 2026
### Nytt
- Gantt-kalender med full måneds-visning og navigasjon
- Gruppering per enhettype i Gantt og Utleieoversikt
- Sortering på alle kolonner i Utleieoversikt og Enheter
- Filterpiller for Telpo M1 og Betalingsterminaler
- KPI-kort i Utleieoversikt (På utleie, Ledige, Planlagt, Forfalt)

---

## v1.2.1 — 12. aug 2026
### Nytt
- Utleie-modul med Gantt-kalender, Utleieoversikt og Enheter
- CRUD for enheter og utleier med SharePoint-sync
- Statuslogikk: Aktiv, Planlagt, Forfalt, Returnert

---

## v1.2.0 — 11. aug 2026
### Nytt
- Venstresidebar navigasjon (erstatter horisontal tab-bar)
- Årssammenligning som undermeny under Lisenser
- Kickback Årssammenligning som undermeny under Kickback
- Alle moduler inni main-content med korrekt bredde

---

## v1.1.2 — 11. aug 2026
### Nytt
- Aldersfordelt: filterpiller per intervall og trendlinje
- Årssammenligning: KPI-kort med totalsum og % endring per år
- "Alle"-knapp på alle filterpiller

---

## v1.1.1 — 11. aug 2026
### Fikset
- Innlogging med KBD1.onmicrosoft.com authority (fikser "Invalid hostname" for synkroniserte brukere)
- Tenant-validering etter innlogging

---

## v1.1.0 — 11. aug 2026
### Nytt
- Microsoft Azure AD innlogging (MSAL.js)
- Rollestyring: Administrator, Redaktør, Leser
- SharePoint-integrasjon for all datalagring
- GitHub Pages hosting

---

## v1.0.0 — 11. aug 2026
### Første versjon
- Lisenser og Kickback med kvartalsoversikt
- Årssammenligning med stablet søylediagram
- Aldersfordelt med Gantt-lignende visning
- Innstillinger: produkter og kickback-kilder
- Excel-import og innebygde eksempeldata
