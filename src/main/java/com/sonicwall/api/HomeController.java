package com.sonicwall.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import springfox.documentation.annotations.*;

@ApiIgnore
@Controller
public class HomeController {
	@RequestMapping(value={"/","/webui"})
	public String index() {
		return "/webui/index.html";
	}
}
