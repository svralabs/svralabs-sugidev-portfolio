import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SugidevHeroLandingPage from './pages/SugidevHeroLandingPage';
import ButtonShowcaseComponentReferencePage from './pages/ButtonShowcaseComponentReferencePage';
import SugidevServicesProjectsPage from './pages/SugidevServicesProjectsPage';
import InsightsCleanBackgroundPage from './pages/InsightsCleanBackgroundPage';
import BadgeShowcaseComponentReferencePage from './pages/BadgeShowcaseComponentReferencePage';
import DevosTableComponentsReferencePage from './pages/DevosTableComponentsReferencePage';
import ContactCleanBackgroundPage from './pages/ContactCleanBackgroundPage';
import SugidevMarqueeAboutSectionPage from './pages/SugidevMarqueeAboutSectionPage';
import SugidevShowcaseExploreSectionPage from './pages/SugidevShowcaseExploreSectionPage';
import SugidevCollectionFooterSectionPage from './pages/SugidevCollectionFooterSectionPage';
import ProjectInquiryCleanBackgroundPage from './pages/ProjectInquiryCleanBackgroundPage';
import DevosEngineeringDashboardPage from './pages/DevosEngineeringDashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sugidev_hero_landing" element={< SugidevHeroLandingPage />} />
        <Route path="/button_showcase_component_reference" element={< ButtonShowcaseComponentReferencePage />} />
        <Route path="/sugidev_services_projects" element={< SugidevServicesProjectsPage />} />
        <Route path="/insights_clean_background" element={< InsightsCleanBackgroundPage />} />
        <Route path="/badge_showcase_component_reference" element={< BadgeShowcaseComponentReferencePage />} />
        <Route path="/devos_table_components_reference" element={< DevosTableComponentsReferencePage />} />
        <Route path="/contact_clean_background" element={< ContactCleanBackgroundPage />} />
        <Route path="/sugidev_marquee_about_section" element={< SugidevMarqueeAboutSectionPage />} />
        <Route path="/sugidev_showcase_explore_section" element={< SugidevShowcaseExploreSectionPage />} />
        <Route path="/sugidev_collection_footer_section" element={< SugidevCollectionFooterSectionPage />} />
        <Route path="/project_inquiry_clean_background" element={< ProjectInquiryCleanBackgroundPage />} />
        <Route path="/devos_engineering_dashboard" element={< DevosEngineeringDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
