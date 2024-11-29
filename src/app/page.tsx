import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <Image
          src="/bluesky.svg"
          alt="Bluesky Butterfly"
          width={120}
          height={120}
          priority  
        />
      </div>

      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl text-center font-medium mb-12">
          Enter your Bluesky handle, select the verification source and enter your ID there
        </h1>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 z-10">
            @
          </div>
          <Input
            type="text"
            placeholder="Bluesky handle"
            className="pl-8"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This is your handle on Bluesky. If you open your profile, you see it below your name, after the @.
        </p>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select verification source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="aws-cb">AWS Community Builder</SelectItem>
            <SelectItem value="aws-hero">AWS Hero</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-600">
          Select the source for verifying you.
        </p>

        <Input
          type="text"
          placeholder="Verification ID"
        />
        <p className="text-sm text-gray-600">
          This is your MVP ID, a GUID. If you open your profile on{" "}
          <a href="https://mvp.microsoft.com" className="text-blue-500 hover:underline">
            mvp.microsoft.com
          </a>
          , it is the last part of the URL, after the last /.
        </p>

        <Button className="w-full">
          Verify
        </Button>

        <p className="text-center text-sm">
          <a href="#" className="text-blue-500 hover:underline">Here</a>
          {" "}you can find all Starter Packs and lists with verified Bluesky users created with this tool.
        </p>
      </div>
    </div>
  );
}
