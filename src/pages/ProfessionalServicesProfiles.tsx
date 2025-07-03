import { useLocation, useParams, useSearchParams } from "react-router";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/ClientCard";
import UserAssistProvider from "../components/UserProfile/UserAssistProvider";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import PageMeta from "../components/common/PageMeta";

interface AssistanceProps {
  pageType: string;
  assistanceProvider?: string;
  askAssistance?: string
}


const ProfessionalServicesProfiles: React.FC<AssistanceProps> = ({ assistanceProvider, pageType }) => {
   const searchParams = useSearchParams();
   const location = useLocation()
  
  console.log('Page Type:', pageType);
  console.log('useParams:', searchParams, location.pathname);
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          { pageType }
        </h3>
        <div className="space-y-6">
          <UserAssistProvider />
          <UserInfoCard />
        </div>
      </div>
    </>
  );
}

export default  ProfessionalServicesProfiles;