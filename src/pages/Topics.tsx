import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import {RecentOrders} from "../components/ecommerce/RecentOrders";


export default function Topics() {
  return (
    <div>
      <PageMeta
        title="Articles Page"
        description="Artisan articles: We are focus on skilled craftspeople who create unique, handcrafted items, often using traditional techniques and materials."
      />
      <PageBreadcrumb pageTitle="Articles page" />

      <RecentOrders />

    </div>
  );
}
