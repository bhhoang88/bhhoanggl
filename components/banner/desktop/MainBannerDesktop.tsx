"use client"
import { Button, Select, SelectItem, Input, Avatar } from "@nextui-org/react";
import { subtitle, title } from "@/components/common/primitives";
import ImageOptimize from "@/components/common/ImageOptimize";
import { useState } from "react";

const countries = [
    { key: 'vietnam', name: 'Việt Nam', src: 'https://flagcdn.com/ar.svg', code: '+84' },
    { key: 'united american', name: 'American', src: 'https://flagcdn.com/ve.svg', code: '+1' },
];

const MainBannerDesktop = (props: any) => {
    const [selected, setSelected] = useState<string>('vietnam');

    const renderSelectedValue = (selectedKey: string) => {
        const country = countries.find(c => c.key === selectedKey);
        return country ? (
            <div className="flex items-center">
                <Avatar alt={country.name} className="w-4 h-4 mr-2" src={country.src} />
                {country.code}
            </div>
        ) : null;
    };

    return (
        <section className="main-banner relative">
            <div className="img-banner h-[806px]">
                <ImageOptimize src='assets/images/banner.png' alt='' />
            </div>
            <div className="absolute top-1/2 -translate-y-[10%] left-0 w-full z-30 flex items-center">
                <div className="container">
                    <div className="banner-content w-[555px] flex flex-col">
                        <h1 className={`${title()} mb-6`}>
                            All-in Digital Bank powered by HDBank
                        </h1>
                        <p className={`${subtitle()} mb-4`}>Enter your phone number to get download link</p>
                        <div className="input-number flex items-center relative gap-3">
                            <div className="flex items-center">
                                <Select
                                    className="select-country bg-transparent"
                                    classNames={{
                                        listboxWrapper: "w-[200px]",
                                        trigger: "h-14 bg-white hover:bg-white data-[hover=true]:bg-white rounded-r-none",
                                    }}
                                    popoverProps={{
                                        classNames: {
                                            base: "w-[200px] before:bg-default-200",
                                        },
                                    }}
                                    onChange={(e) => setSelected(e.target.value)}
                                    renderValue={() => renderSelectedValue(selected)}
                                    selectionMode="single"
                                    defaultSelectedKeys={[`${selected}`]}
                                    label={<p className='hidden'>Enter your phone number to get download link</p>}
                                    placeholder="Enter your phone number to get download link"
                                    labelPlacement="outside"
                                    size={'lg'}
                                >
                                    {countries.map((country) => (
                                        <SelectItem
                                            key={country.key}
                                            startContent={
                                                <Avatar alt={country.name} className="w-4 h-4" src={country.src} />
                                            }
                                        >
                                            {country.code}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <div className="input-render flex items-center relative">
                                    <Input
                                        type="text"
                                        placeholder="+84 000 000 000"
                                        className="bg-inherit rounded-t-none"
                                        size={'lg'}
                                        classNames={{
                                            innerWrapper: "bg-transparent",
                                            inputWrapper: [
                                                "bg-white h-14 rounded-l-none border-l w-[250px]",
                                                "hover:bg-white",
                                                "dark:group-data-[focus=true]:bg-white",
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                            <Button className="btn btn-main min-w-[135px] h-14">
                                Submit
                            </Button>
                        </div>
                        <div className="qr-code flex items-center bg-white w-[330px] px-8 py-3 gap-8 rounded-2xl border border-[rgba(12, 12, 14, 0.1)] mt-12">
                            <ImageOptimize src='/assets/icons/qrcode.jpg' alt="QR Code" />
                            <p>Scan QR code để tải app ngay!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBannerDesktop