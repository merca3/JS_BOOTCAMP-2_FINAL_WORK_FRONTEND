import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AdditionalInfo from '../Components/AddInfo';

import Breadcrumbs from "../Components/Breadcrumbs";
import Map from '../Components/Map';
import WorkingHours from '../Components/WorkingHours';

function AboutUs() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About Us' },
    ]

    return (
        <div className="container text-light">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <Tabs className="border rounded">
                <TabList>
                    <Tab>Working Hours</Tab>
                    <Tab>How To Get</Tab>
                    <Tab>What Is Available</Tab>
                    <Tab>Additional info</Tab>
                </TabList>

                <TabPanel>
                    <WorkingHours />
                </TabPanel>
                <TabPanel>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ullam laboriosam repellendus, atque perspiciatis iste quam placeat libero minima eligendi asperiores magni voluptatum praesentium. Veritatis repellendus at maxime obcaecati iusto?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, et. Tenetur necessitatibus corporis, eius voluptas ratione est magni eaque debitis possimus dolor corrupti libero vitae magnam delectus iste in numquam.
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ullam laboriosam repellendus, atque perspiciatis iste quam placeat libero minima eligendi asperiores magni voluptatum praesentium. Veritatis repellendus at maxime obcaecati iusto?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, et. Tenetur necessitatibus corporis, eius voluptas ratione est magni eaque debitis possimus dolor corrupti libero vitae magnam delectus iste in numquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam tempore voluptate labore, a expedita, magnam necessitatibus debitis quam cumque impedit ducimus possimus nulla pariatur sunt vitae! Quam, voluptatum maiores?
                    </div>
                </TabPanel>
                <TabPanel>
                    <AdditionalInfo />
                </TabPanel>
            </Tabs>
            <h3 className="my-5">Contacts:</h3>
            <div className="row text-center">
                <div className="col-12 col-sm-7 col-lg-6">
                    <Map />
                </div>
                <div className="col-12 col-sm-5 col-lg-6">
                    <div className="mb-5">
                        <h5>Address:</h5>
                        <p>Latvia, Riga, Street, House Nr</p>
                    </div>
                    <div className="my-5">
                        <h5>Email:</h5>
                        <p>info@cinema.com</p>
                    </div>
                    <div className="my-5">
                        <h5>Phone:</h5>
                        <p>+371 XXXXXXXX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;